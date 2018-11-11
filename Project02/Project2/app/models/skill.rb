class Skill < ApplicationRecord
  has_many :tags
  has_many :projects, through: :tags
end
