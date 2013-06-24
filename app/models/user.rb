class User < ActiveRecord::Base
  attr_accessible :address, :age, :name
end
