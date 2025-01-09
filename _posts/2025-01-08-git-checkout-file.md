---
layout: post
title: Copy file from another branch using Git
category: Dev
tags: [development, git]
comments: true
---
Every so often I find myself doing a search for finding the right command to copy a file from another branch to the current working branch in my Git workflows. 
It might be to go back to a working version if I messed it up, or to revert all my changes if I was working on something temporary.

```bash
git checkout <source-branch> -- <file-path>
```
where
```
<source-branch>: The name of the branch where the file currently exists.
<file-path>: The path to the file you want to copy (relative to the repository root).
```
This command will copy the file from the specified branch into your current branch's working directory.

## Example
Assuming we are on the main branch.
And we want to copy a file `src/config/settings.json` from the branch feature-branch.

Run:
```bash
git checkout feature-branch -- src/config/settings.json
```
The file `src/config/settings.json` from feature-branch will now be in the working directory on main.
