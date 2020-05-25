git fetch origin
git checkout master
git pull --rebase
npm version patch -m "Bump up version to %s"
git push origin master --tags
git checkout release
git pull
git merge -X theirs master
git push origin release --tags
git checkout master
