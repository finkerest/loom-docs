import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/footer-logo.png'

export default function FooterLogo() {
  return (
    <Link className="inline-flex mb-2 md:mb-0" href="/" aria-label="Cruip">
      <Image src={LogoImg} width={150} height={45} alt="Docs" />
    </Link>
  )
}
