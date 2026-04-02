# GenPlayer Website

这是一个纯静态官网目录，支持：

- 中英文切换
- 黑白主题切换
- 产品介绍首页
- 隐私政策页
- 问题反馈/支持页

由于页面全部使用相对路径，既可以挂在自定义域名根目录，也可以直接挂在 GitHub Pages 的仓库子路径下。
## 本地预览

```bash
python3 -m http.server 8080 --directory website
```

然后访问：

- http://127.0.0.1:8080/index.html
- http://127.0.0.1:8080/privacy.html
- http://127.0.0.1:8080/feedback.html

## 部署建议

可直接部署到：

- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel

如果主要访问人群在中国大陆，`GitHub Pages` 往往更适合作为“发布源”而不是“最终加速层”。更推荐：

- `Aliyun OSS + CDN`
  - 最稳妥的国内静态托管方案，直接把 `website/` 同步到 OSS，再由 CDN 对外分发。
- `ECS / Nginx + CDN`
  - 保持你现有阿里云基础设施，静态文件直接放在 ECS 上，或由 Nginx 反向代理并缓存 GitHub Pages。
- `Cloudflare Pages / Cloudflare CDN`
  - 海外访问体验通常更好，但大陆网络稳定性仍不如阿里云本地源站。

### 国内访问与缓存建议

如果域名仍然直接指向 `GitHub Pages`，你在阿里云上额外配一个 `Nginx` 并不会让访客更快；只有当域名先访问你的 `Nginx/CDN`，再由它回源 GitHub Pages 时，缓存才会生效。

实际优先级建议：

1. `最佳实践`
   - 继续把当前仓库当作内容源
   - Actions 同步 `website/` 到阿里云 OSS 或你的 ECS 目录
   - 前面挂阿里云 CDN
2. `次优实践`
   - 保持 GitHub Pages 为源站
   - 域名改到阿里云 ECS / Nginx
   - 用 `proxy_cache` 对静态资源做回源缓存
3. `不太推荐`
   - 继续让用户直连 GitHub Pages，单靠页面自身很难解决跨境链路慢的问题

一个最小可用的 `Nginx` 缓存代理示例：

```nginx
proxy_cache_path /var/cache/nginx/genplayer levels=1:2 keys_zone=genplayer_static:50m max_size=1g inactive=7d use_temp_path=off;

server {
    listen 80;
    server_name genplayer.fugary.com;

    location / {
        proxy_pass https://fugary.github.io/gen-player-pages/;
        proxy_set_header Host fugary.github.io;
        proxy_ssl_server_name on;

        proxy_cache genplayer_static;
        proxy_cache_valid 200 301 302 10m;
        proxy_cache_valid 404 1m;
        proxy_cache_use_stale error timeout updating http_500 http_502 http_503 http_504;

        add_header X-Cache-Status $upstream_cache_status always;
    }
}
```

如果后续主要面向国内用户，仍建议把它进一步收口为：

- `GitHub 仓库做源码与自动发布`
- `Aliyun OSS / ECS 做正式源站`
- `阿里云 CDN 做加速和缓存`

## GitHub Pages 发布

如果主仓库是私有仓库，推荐采用：

- 私有主仓库保存 iOS 工程与 `website/` 源文件
- 单独创建一个公开仓库作为官网发布仓库
- 当前仓库的 GitHub Actions 自动把 `website/` 同步到公开仓库
- GitHub Pages 从公开仓库的分支根目录提供静态站点

推荐的公开仓库命名：

- `fugary.github.io`
  - 访问地址是根域名：`https://fugary.github.io/`
- `GenPlayer-Website`
  - 访问地址是项目路径：`https://fugary.github.io/GenPlayer-Website/`

当前仓库已确定使用的公开官网仓库：

- 仓库：`fugary/gen-player-pages`
- 预计访问地址：[https://genplayer.fugary.com/](https://genplayer.fugary.com/)

### 主仓库需要配置的内容

1. 在 GitHub 上创建一个公开仓库，作为官网发布仓库。
2. 在当前主仓库 `Settings -> Secrets and variables -> Actions` 中新增：
   - Repository secret: `WEBSITE_PUBLISH_TOKEN`
     - 使用 Fine-grained PAT 或 classic PAT
     - 至少需要对 `fugary/gen-player-pages` 有 `Contents: Read and write`
   - Repository variable: `WEBSITE_PUBLISH_REPOSITORY`
     - 可选，默认已内置为 `fugary/gen-player-pages`
   - Repository variable: `WEBSITE_PUBLISH_BRANCH`
     - 可选，默认 `main`
3. 推送 `main` 分支上的 `website/**` 或工作流改动，或手动触发 `Sync Website to Public Pages Repository`。

### 公开官网仓库需要配置的内容

1. 打开公开仓库 `Settings -> Pages`。
2. 在 `Build and deployment` 中选择 `Source = Deploy from a branch`。
3. 选择发布分支：
   - 如果同步变量 `WEBSITE_PUBLISH_BRANCH` 未设置，则选择 `main`
   - 如果设置了其他分支，则选择对应分支
4. 目录选择 `/ (root)`。
5. 等待 Pages 首次发布完成。

这样做的原因是：GitHub Free 下私有仓库无法直接启用 GitHub Pages，而单独的公开仓库既能公开访问站点，也能保持主工程继续私有开发。

默认访问地址通常为：

- 用户页：`https://<github-username>.github.io/`
- 项目页：`https://<github-username>.github.io/<repo-name>/`

对于当前配置，发布地址将是：

- 首页：[https://genplayer.fugary.com/](https://genplayer.fugary.com/)
- 隐私政策：[https://genplayer.fugary.com/privacy.html](https://genplayer.fugary.com/privacy.html)
- 问题反馈：[https://genplayer.fugary.com/feedback.html](https://genplayer.fugary.com/feedback.html)

## 上线前需要改的配置

1. 将 `website/assets/site.js` 里的 `SUPPORT_EMAIL` 改成真实可用邮箱。
2. 复核 `privacy.html` 中的隐私条款内容，确保与实际上架配置一致。
3. 在 App Store Connect 中填写：
   - `Privacy Policy URL` -> `privacy.html`
   - `Support URL` -> `feedback.html`

## iOS 审核建议

`Privacy Policy URL` 对上架通常应准备好，尤其是应用涉及账号、网络连接、设备权限或任何用户数据处理时。

`Support URL` 不一定是单独的硬性法规要求，但强烈建议提供。对审核人员来说，它能快速说明联系渠道；对正式上线也能作为用户支持入口。
