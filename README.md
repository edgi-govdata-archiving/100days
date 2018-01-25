# 100 Days

Website for the [EDGI 100 days report](http://100days.envirodatagov.org/), built with [Jekyll](https://jekyllrb.com/).

## License & Copyright

Copyright (C) 2017 Environmental Data and Governance Initiative (EDGI)

<a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/"><img class="pa2" alt="Creative Commons Licence" style="border-width:0" src="https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png" /></a><br />100days website is licensed under a <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

## Development

### 1. Install Dependencies

Install the Jekyll gem:

```bash
$ gem install jekyll
```
**Windows users:** [Run Jekyll on Windows](http://jekyll-windows.juthilo.com/)

### 2. Run Locally

```bash
$ bundle exec jekyll serve
```

## Deployment

Commits and merges into `master` will be deployed to the production server, current process is:

The website can be deployed via the Namecheap CPanel user interface, or
totally via commandline terminal.

### Via Web UI

1. Build and archive site locally:
    ```bash
    $ bundle exec rake archive
    ```
1. Upload tar archive to webroot via cPanel: `Files > File Manager > /100days.envirodatagov.org`
1. Extract archive within interface. (This will overwrite existing files.)

### Via Commandline Terminal

1. Build site locally and deploy via FTP:
    ```bash
    $ bundle exec rake deploy[<my-ftp-username>, <my-ftp-password>]
    ```

<sub>The default FTP server is `server136.web-hosting.com`. You may set
the environment variable `100DAYS_FTP_HOST` to override this.</sub>
