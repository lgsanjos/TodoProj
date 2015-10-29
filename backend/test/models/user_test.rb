require "rails_helper"

describe User do

  it 'should create a new user' do
    user = User.new(:name => 'Name', :password => 'pass')

    expect(user.name).to eql 'Name'
    expect(user.password).to eql 'pass'
  end

end
