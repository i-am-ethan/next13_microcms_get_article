# Next.js13でmicroCMSでブログコンテンツを取得する

Next.js13でmicroCMSで書いたブログコンテンツを取得するためのリポジトリです。以下のような見た目になります。
あくまで表示するためのデモなので、ルーティングは実装していません。クローンは自己責任でお願いします。

![プロジェクトのスクリーンショット](./ss_img/fv.png)


## 起動方法
パッケージのインストール
```
npm install
```
.envを作成

```
.env.exampleを.envに変えて、それぞれにmicroCMSで発行された下の3つを入力して下さい
SERVICE_DOMAIN
API_KEY
END_POINT
```
起動する
```
npm run dev
```




