import React from 'react'
import Image from 'next/image'
import {
  BannerContainer,
  BannerTitle,
  HeroBannerStatistics,
  HeroContainer,
  PreviewContainer,
  SearchBannerInputContainer,
} from './banner'
import { BsSearch } from 'react-icons/bs'
import backGroundPreviewImage from '../../assets/sub-background-banner.svg'
import PreviewImage from '../../assets/home_header.png'

export default function Banner() {
  return (
    <BannerContainer>
      <HeroContainer>
        <BannerTitle>Comprar barato, agora, está mais fácil!</BannerTitle>
        <HeroBannerStatistics>
          <div className="count-products">
            50+ <p>Produtos</p>
          </div>
          <div className="count-customers">
            100+ <p>Clientes</p>
          </div>
        </HeroBannerStatistics>
        <SearchBannerInputContainer>
          <input type="text" placeholder="O que vc está procurando?" />
          <button>
            <BsSearch size={18} />{' '}
          </button>
        </SearchBannerInputContainer>
      </HeroContainer>
      <PreviewContainer>
        <Image
          src={backGroundPreviewImage}
          alt="FUNDO CIRCULAR NEGRO POR TRAS DA IMAGEM"
          height="350"
          priority
          className="background-preview-image"
        />
        <Image
          src={PreviewImage}
          alt="GELADEIRA EM FORMA DE DESENHO"
          height="550"
          priority
          className="preview-image"
        />
      </PreviewContainer>
    </BannerContainer>
  )
}
