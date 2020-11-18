Rails.application.routes.draw do
  devise_for :users
  get 'activity/mine'
  get 'activity/feed'
  get 'activity/load_data'
  get 'welcome/index'

  root to: 'activity#mine'
end
