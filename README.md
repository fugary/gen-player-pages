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
