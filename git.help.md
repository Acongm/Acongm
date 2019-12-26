<!-- git remote add origin git@github.com:Acongm/Acongm.git -->
1、把git上的代码clone到本地
	$ git clone http:xxxx(地址，可以http也可以ssh)

2、clone到本地以后、使用branch -a 查看远程所有分支
	$  git branch -a

	git checkout -b acongm  创建分支
	git branch -d acongm	删除分支
	git push origin --delete 如果你想删除远端的分支的话，那么得使用
	git  merge acongm		合并分支

3、如若你有分支：master branch1 branch2 ，使用checkout用来切换分支。还可以用第2条指令去创建本地分支目录和远程的保持一致，并且切换远程分支到本地分支目录
	$ git checkout branch1
	$ git checkout -b branch1 origin/branch1 

4、在本地修改完代码后、保存所有的项目
	$ git add .

5、保存完成后可以提交到本地
	$ git commit -m '提交说明'

6、最后提交git服务器，要加上分支的名字，默认master目录不加。
	$ git push origin branch1 

7、如果本地没有git仓库，想要新建一个git仓库并上 传项⽬可执行下列⼏个命令:

	mkdir 123456  mkdir命令用于创建一个文 件夹 格式:mkdir <文件夹名>，此命令解释为创建一个名为123456的 文件夹
	cd 123456 
	cd 命令用于切换文件目录 git init 
	git init 命令用于初始化一 个本地仓库
	echo "# 123456" >> README.md 
	echo命令用于 将#"123456"字符串写入readme文件，如果readme文件不存在就创 建然后再追加写入
	git add README.md 
	git add 用于添 加单个文件，或者文件夹下整个文件
	git commit -m "first commit" 
	git commit -m "描述信息" 提交文件到本地仓库
	git remote add origin https://git.coding.net/fireness/123456.git 
	git remote add origin URL 将本地仓库与远程仓库 关联

	git push -u origin master 将 本地仓库文件提交至远程仓库

8、如果本地已有git仓库，想要将本地仓库与远程仓 库关联可执行下列两个命令:
	git remote add origin https://git.coding.net/fireness/123456.git
	git push -u origin master



git reset --hard HEAD^        回退到上个版本
git reset --hard commit_id    退到/进到 指定commit_id
bb209046be074515e12fbde02ecabe3db302273e

来把你的本地代码回到你复制的某个版本上
如果你要吧回退的某个版本提交的远程的话
git push origin HEAD --force