
## 使い方

まず対象リポジトリで`git log --pretty=format:"%H" --merges master..develop` などでコミット一覧を取得
その結果を `mergeCommitList.txt`に貼り付け

そして、 `sh ./start.sh` で実行して、アクセス権限のあるアカウントを入力すると、

```
# commitHash  PRのID   アカウント名
1597437c19dad49ec0c5f75614937b6c255aaaaa        #3421   name1
429263a51f66498d12cdc73321b46a884c62aaaa        #3389   name1
efc98a4cc855e0b0c687cf0ee5b1fa84b4bfaaaa        #3439   name1
```

が取れる。

## 準備

Node (v6)

npm install