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

### Manual

1. Build and archive site locally:
    ```bash
    $ bundle exec rake archive
    ```
1. Upload tar archive to webroot via cPanel: `Files > File Manager > /100days.envirodatagov.org`
1. Extract archive within interface. (This will overwrite existing files.)

### Scripted

1. Set the shell environment variables in [`sample.env`](sample.env)
1. Build site locally:
    ```bash
    $ bundle exec jekyll build
    ```
1. Run the FTP upload script:
    ```bash
    $ bundle exec ruby scripts/ftp_upload.rb
    ```
