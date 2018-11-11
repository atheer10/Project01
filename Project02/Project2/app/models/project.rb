class Project < ApplicationRecord
  has_many :tags
  has_many :skills, through: :tags
  belongs_to :catagory
end
