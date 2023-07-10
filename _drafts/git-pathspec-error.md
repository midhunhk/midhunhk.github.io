error: pathspec '' did not match any file(s) known to git

I tried to do checkout a file from the main branch into another branch

git checkout main 'filename'

had to change to

git checkout origin/main 'fileaname'