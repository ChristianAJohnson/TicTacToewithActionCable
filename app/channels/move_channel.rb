# Be sure to restart your server when you modify this file. Action Cable runs in a loop that does not support auto reloading.
class MoveChannel < ApplicationCable::Channel
  def subscribed
    stream_from "move_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def select_tile(data)
    # I hardcoded the game in order to make the feature simpler
    Move.create(game: Game.first, tile: data['tile'].to_i)
  end
end
