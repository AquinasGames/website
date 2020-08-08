The company website and blog. Has a section for every game the company develops. Also maintains a development blog. 
Development and promotion can also be done through Twitter. Use the Jekyll GUI for adding new devlogs to the site.

```Shell
$ ./build
```

The `build.sh` script will automatically launch the website locally on port 8000. 
You can call Jekyll manually if you want to define any custom parameters such as ports.

---

Blog posts are formatted like so:

```markdown
---
title: Test Post
layout: posts
tags: General
permalink: /blog/test-post
---

This is a summary paragraph for the post.

## This is a Heading

This is content for the section of the page.
```

CSS styles were styled with this format in mind. Other configurations may disrupt the visuals.

---

External dependencies and tools include:

- [Getform](https://getform.io/) for contact forms and dynamic communication between users and staff
- [Google reCAPTCHA](https://www.google.com/recaptcha) for preventing spam on contact fields and forms
