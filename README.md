# ROAD TRIPPER

## ERD
![Screen Shot 2022-04-08 at 3 27 08 PM](https://user-images.githubusercontent.com/42722554/162543883-546670d4-497c-43b6-9f60-1a983700b1eb.png)


## Wireframe 

![Screen Shot 2022-04-08 at 1 57 51 PM](https://user-images.githubusercontent.com/42722554/162529062-8ad66339-25d5-4bdb-a6c0-1b3013d11382.png)
![Screen Shot 2022-04-08 at 1 57 59 PM](https://user-images.githubusercontent.com/42722554/162529055-f75e3b59-fd05-44e1-bfbb-07f69f8d8d6c.png)
![Screen Shot 2022-04-08 at 1 56 18 PM](https://user-images.githubusercontent.com/42722554/162528923-22cbca08-3d04-4414-8c84-d443ab73f42f.png)
![Screen Shot 2022-04-08 at 1 56 28 PM](https://user-images.githubusercontent.com/42722554/162528928-44ef4812-44fd-444d-90dc-be1952f01f44.png)

## Trello
https://trello.com/invite/b/nUJVFqvG/c1177e873c7cf077fcf626ca5e0d2912/project-2-roadtripper

## Routes
![Screen Shot 2022-04-08 at 3 49 19 PM](https://user-images.githubusercontent.com/42722554/162543751-062f8a8f-4d23-4374-810a-d4b6f52a7a79.png)


# passport-boilerplate


This is your passport boilerplate.

## Setup 

1. Clone the repo
2. Rename the folder to your Project
3. Delete the `.git` file, when you are in the root of the file, you can press `ls` and you should see a `.git` file, then go ahead and run `rm -rf .git`


#### Setup your git repo
0. Setup your `.env` file and add all the things you need! (look at mongoose movies for reference!)
1. in the project root `git init`
2. `git add .` to add all the starter code
3. `git commit -m "setup boilerplate"` 
4. go to github and create your github and create a repo (Without a readme or liscense you can add that later!)
5. copy the remote address
6. In your terminal add the remote `git remote add origin yourGithubRepo'sAddressGoesHere`
7. `git pull origin master` If a screen pulls up asking you to do something just press `:q` and then `enter` (thats vim btw :) )
8. `git push origin master`

#### Setup your login

0. Setup your database connection string
1. Then Setup Your User Model, 
2. Follow the steps from the lesson plan to get your Google login credentials for your `.env` file (create the file if you haven't), or you can just copy the ones from earlier if you want to reuse them.
3. Setup the Code in your config passport 
4. Setup your callback routes in your `routes/index`
5. Setup a view and test your login!

#### Make a commit 

```git commit -m "setup up oauth and User Model"```
