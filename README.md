# ROAD TRIPPER

## ERD
![Screen Shot 2022-04-08 at 12 09 59 PM](https://user-images.githubusercontent.com/42722554/162508848-5bfa73eb-7e2d-4493-a3f5-b2d4fbf5775a.png)

## Wireframe 

![Screen Shot 2022-04-08 at 1 36 02 PM](https://user-images.githubusercontent.com/42722554/162527607-9c556020-126c-40da-8209-6f9e2d00bd0f.png)
![Screen Shot 2022-04-08 at 1 36 16 PM](https://user-images.githubusercontent.com/42722554/162527614-9f0755f8-17c8-4047-ac5b-8fadde83facf.png)
![Screen Shot 2022-04-08 at 1 36 25 PM](https://user-images.githubusercontent.com/42722554/162527618-6a0e4b18-7cb0-4385-b118-ddf018828113.png)
![Screen Shot 2022-04-08 at 1 36 33 PM](https://user-images.githubusercontent.com/42722554/162527623-1df3aa22-9c97-45d3-be38-e450294b0070.png)



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
