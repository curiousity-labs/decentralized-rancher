export interface OpenseaResponse<T> {
  assets: T[]
  next: string | null
  previous: string | null
}

export type OpenseaAsset = {
  id: number | null
  num_sales: number | null
  background_color: string | null
  image_url: string | null
  image_preview_url: string | null
  image_thumbnail_url: string | null
  image_original_url: string | null
  animation_url: string | null
  animation_original_url: string | null
  name: string | null
  description: string | null
  external_link: string | null
  asset_contract: {
    address: string
    asset_contract_type: string
    created_date: string
    name: string
    nft_version: string | null
    opensea_version: string | null
    owner: number
    schema_name: string
    symbol: string | null
    total_supply: string | null
    description: string | null
    external_link: string | null
    image_url: string | null
    default_to_fiat: boolean
    dev_buyer_fee_basis_points: number
    dev_seller_fee_basis_points: number
    only_proxied_transfers: boolean
    opensea_buyer_fee_basis_points: number
    opensea_seller_fee_basis_points: number
    buyer_fee_basis_points: number
    seller_fee_basis_points: number
    payout_address: string | null
  }
  permalink: string
  collection: {
    banner_image_url: string | null
    chat_url: string | null
    created_date: string
    default_to_fiat: boolean
    description: string | null
    dev_buyer_fee_basis_points: string
    dev_seller_fee_basis_points: string
    discord_url: string | null
    display_data: {
      card_display_style: string | null
      images: []
    }
    external_url: string | null
    featured: boolean
    featured_image_url: string | null
    hidden: boolean
    safelist_request_status: string
    image_url: string | null
    is_subject_to_whitelist: boolean
    large_image_url: string | null
    medium_username: string | null
    name: string | null
    only_proxied_transfers: boolean
    opensea_buyer_fee_basis_points: string
    opensea_seller_fee_basis_points: string
    payout_address: string | null
    require_email: boolean
    short_description: string | null
    slug: string | null
    telegram_url: string | null
    twitter_username: string | null
    instagram_username: string | null
    wiki_url: string | null
    is_nsfw: boolean
    fees: {
      seller_fees: {}
      opensea_fees: {
        [id: string]: number | null
      }
    }
    is_rarity_enabled: boolean
  }
  decimals: string | null
  token_metadata: string | null
  is_nsfw: boolean
  owner: {
    user: string | null
    profile_img_url: string | null
    address: string | null
    config: ''
  }
  seaport_sell_orders: string | null
  creator: {
    user: string | null
    profile_img_url: string | null
    address: string | null
    config: string
  }
  traits: []
  last_sale: string | null
  top_bid: string | null
  listing_date: string | null
  is_presale: boolean
  transfer_fee: string | null
  transfer_fee_payment_token: string | null
  supports_wyvern: true
  rarity_data: string | null
  token_id: string | null
}
