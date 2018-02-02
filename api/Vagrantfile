# -*- mode: ruby -*-
# vi: set ft=ruby :


Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"

  config.vm.provider "virtualbox" do |v|
	v.memory = 2048
	v.cpus = 4
  end

  config.vm.network "private_network", ip: "192.168.33.10"

  config.vm.synced_folder "C:\\Workspace\\Web\\entrance-task-1", "/var/www/html"

end
