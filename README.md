# Pythonista Tools  
## Blog Posts
Blog posts should be written in Markdown and are processed by Jekyll. ~~Therefore, they should be located inside the ```_posts``` directory. All post assets should be located in the ```assets``` directory and be referenced in the Markdown posts using this format: ```{{ site.url }}/assets/[Asset file name with extension]```. Also, **blog posts must use the Jekyll file naming scheme or they will not show up in the post index**. The format is as follows: ```[Year]-[Month]-[Day]-[Title].md```.~~ _**The Jekyll file naming scheme is no longer required.**_ We are working on a better way to include assets. Until that's finished, please refrain from using any assets. Posts are automatically placed in the ```posts``` directory. Please look at the wiki for the most up-to-date information.
  
Here is the Jekyll Front Matter (YAML) format all blog posts MUST include before anything else:  
```
---
title: [Capitalized post title]
layout: post
permalink: /blog/[Lowercase post title excluding spaces].html
author: [Your GitHub username]
category: [Please use 'General' or 'Tutorials']
---
```
If blog posts do not follow these guidelines, they will probably not be accessable from the public website. And even if they are, navigating the blog as a whole will be an inconsistent and confusing experience for viewers.
