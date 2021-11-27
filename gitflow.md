    export branchFolder="features/"
    export branch="tag-line"
    export branchName="${branchFolder}${branch}"
    export tag="adds ${branch} feature"
    export repo="work-gold-dev-test"
    export myArray=(${branch} ${tag} ${repo})
    alias ce="echo '${myArray[@]}'"

# Existing repo - new branch

    alias gs="git status"
    alias gst="git stash"
    alias gb="git branch"
    alias gel="git checkout main; git pull"
    alias geb="git checkout -b"
    alias gsa="git stash apply"
    alias gca="git add . && git commit -m"

## One time for each branch

    alias gph="git push origin -u HEAD"

# All other times

    alias gp="git push"

## New pero

    alias gra="git remote add origin ${myGit}${repo}.git"


    alias nrd="npm run dev"

## helpers

    alias ge="git checkout"
    alias gem="git checkout main"
    alias gpo="git push origin"

    alias gr="git remote"
    alias grv="git remote -v"
    alias grso="git remote show origin"

    alias gl="git log -1"
    alias grph="git rev-parse HEAD"
