require 'rails_helper'

RSpec.describe AuthenticationController, type: :controller do

  it 'should return user id when login succeed' do
    post :login, { :username => 'name', :password => 'pass123' }, :type => :json

    expect(response.status).to be 200
    expect(response.body).to be 200
  end

end
