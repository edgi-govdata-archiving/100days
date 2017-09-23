namespace :assets do
  task :precompile do
    puts `bundle exec jekyll build`
  end
end

task :archive do
  puts "--- Building Jekyll website in _site/ directory..."
  sh "bundle exec jekyll build"
  puts "--- Generating archive file 100days.tar.gz from built website files..."
  sh "cd _site && tar --create --gzip --verbose --file ../100days.tar.gz *"
  puts "--- Done! Create 100days.tar.gz file archive!"
end
