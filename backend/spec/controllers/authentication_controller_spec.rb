require 'rails_helper'
require 'json'

RSpec.describe AuthenticationController, type: :controller do

  it 'should return user id when login succeed' do
    returned_user = User.new(:name => 'name', :password => 'pass123')
    allow(User).to receive(:where).and_return([returned_user])

    post :login, { :username => 'name', :password => 'pass123' }, :type => :json

    expect(response.status).to be 200

    parsed_body = JSON.parse response.body
    expect(parsed_body['name']).to eql 'name'
    expect(parsed_body['password']).to eql 'pass123'
  end

  it 'should return error message when login fail' do
    post :login, { :username => 'user', :password => '23'}, :type => :json

    expect(response.status).to be 401
    expect(response.body).to eql 'Failed to login'
  end

end
