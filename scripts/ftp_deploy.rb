require 'net/sftp'

host = ENV['100DAYS_FTP_HOST']
username = ENV['100DAYS_FTP_USER']
password = ENV['100DAYS_FTP_PASS']
port = ENV['100DAYS_FTP_PORT']

base_dir = "/home/#{username}/100days.envirodatagov.org"

Net::SFTP.start(host, username, :password => password, :port => port) do |sftp|
  sftp.upload!("_site/", base_dir)
end
