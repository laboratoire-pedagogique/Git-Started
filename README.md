# Git Started

**Git Started** (nice one haha 😃 ) is a repository that contains a simple HTML, CSS and JS project.
Its purpose is to help those who are beginning to use git.

## Begin

First of all, you must have git installed on your computer/laptop.
Visit this link if it's not the case : [GIT](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

With git installed, open up your terminal and enter these commands : 

```sh
git config --global user.name "github_username"
```

```sh
git config --global user.email "github_email"
```

Alright ! Now let's begin the interesting part :

- After forking this repository (if you want to contribute), clone by using :
 ```sh
    git clone https://github.com/Sanmandresy/Git-Started.git
```
- Then (if you're on linux) :

```bash
    cd "Git-started/"
```
> Actually, there are two branches. For best practice, usually work in **dev** or another branch than **master**/**main** .

## Basics
1) If your current directory isn't a repository, to initialize it : 

```sh
    git init
```

2) Too see all the available branch : 

```sh
    git branch -a
```

> Even remote branch will be shown

3) To switch branch :

```sh
    git branch branch_name
```
or

```sh
    git checkout -b branch_name
```

> in case the branch does not exist yet.

4) To see the branch status : 

```bash
    git status
```

5)  To see branch history : 

```sh
    git log 
```
or
```sh
    git log --oneline
```

6) To see changes :

```sh
    git show
```
or 
```sh
    git show file_name
```
> You can see a specific file's changes

7) To index your changement : 

```sh
    git add .
```
or
```sh
    git add file_name or folder_name/
```
> If you want to add every changement one by one.

8) To save those changes :

```sh
    git commit -m "message"
```
> Best practice : [use conventionnal commit](https://www.conventionalcommits.org/en/v1.0.0/)

9) If you want to push these changes in your remote repository : 

```sh
    git remote add origin git@github.com:username/repository_name.git
```
then
```sh
    git push origin branch_name
```
> By default, it's master/main.

If the remote branch already exist though : 

```sh
    git push
```

10) To fetch changes in remote :

```sh
    git fetch
```
or 
```sh
    git pull
```
> In case you want to fetch and merge those changes directly.

11) To merge your divergent branch to the main branch :

```sh
    git merge branch_name
```

> In case of conflict, you can abort : 

```sh
    git merge --abort
```

And that's the basics for you i guess !
