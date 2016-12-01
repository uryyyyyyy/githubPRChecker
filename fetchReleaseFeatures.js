const GitHub = require('github-api');
const fs = require('fs');

const account = process.argv[2];
const password = process.argv[3];

const org = "opt-tech";
const repo = "v7-apps";


const gh = new GitHub({
    username: account,
    password: password
});

let v7 = gh.getRepo(org, repo);

fs.readFile('./mergeCommitList.txt', 'utf8', function (err, text) {
    let list = text.split('\n');
    list.forEach(v => {
        v7.getCommit(v, (err, commit) => {
            const prId = commit.message.substring(20, 24);
            v7.getPullRequest(prId, (err, pr) => {
                console.log(v + "\t#" + prId + "\t"+ pr.user.login)
            });
        });
    });
});