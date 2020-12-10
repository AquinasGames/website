The company website and blog. Has a section for every game the company develops. Also maintains a development blog. 
Development and promotion can also be done through Twitter.
The `build.sh` script will automatically launch the website locally on port 8000. 
You can call Jekyll manually if you want to define any custom parameters such as ports.
Development is done in Ubuntu.

```Shell
sudo apt-get install ruby-full build-essential zlib1g-dev
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
gem install jekyll bundler
bundle install
```

```Shell
./build
```

External dependencies and tools include:

- [Getform](https://getform.io/) for contact forms and dynamic communication between users and staff
- [Google reCAPTCHA](https://www.google.com/recaptcha) for preventing spam on contact fields and forms

All other assets have been created in-house. 
