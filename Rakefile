require './scripts/ftp_deploy.rb'

namespace :assets do
  task :precompile do
    puts `bundle exec jekyll build`
  end
end

desc "Build the website"
task :build do
  puts "--- Building Jekyll website in _site/ directory..."
  sh "bundle exec jekyll build"
end

desc "Archive the website"
task :archive => [:build] do
  puts "--- Generating archive file 100days.tar.gz from built website files..."
  sh "cd _site && tar --create --gzip --verbose --file ../100days.tar.gz *"
  puts "--- Done! Create 100days.tar.gz file archive!"
end

desc "Deploy the website via FTP"
task :deploy, [:ftp_username, :ftp_password] => [:build] do |t, args|
  ftp_deploy_site!(args[:ftp_username], args[:ftp_password])
end

# List all rake tasks when command called without any tasks
task :default do
  puts `rake --tasks`
end
