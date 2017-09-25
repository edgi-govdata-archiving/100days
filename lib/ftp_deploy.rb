require 'net/sftp'

DEFAULT_HOST = 'server136.web-hosting.com'
DEFAULT_PORT = 21098

host = ENV['100DAYS_FTP_HOST'] || DEFAULT_HOST

def ftp_deploy_site!(username, password)
  unless username and password
    puts "Deploy aborted. You must provide a username and password!"
    return
  end
  namecheap_account = 'envinxpm'
  base_dir = "/home/#{namecheap_account}/100days.envirodatagov.org"

  Net::SFTP.start(host, username, :password => password, :port => DEFAULT_PORT) do |sftp|
    if Dir.exist?("_site/")
      sftp.upload!("_site/", base_dir)
    end
  end
end

