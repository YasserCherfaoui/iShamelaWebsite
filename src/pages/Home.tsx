import { Hero } from '../components/Hero'
import { ScreensGallery } from '../components/ScreensGallery'
import { FeatureGrid } from '../components/FeatureGrid'
import { HowItWorks } from '../components/HowItWorks'
import { OpenSource } from '../components/OpenSource'
import { Downloads } from '../components/Downloads'
import { CTABand } from '../components/CTABand'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { site } from '../content/copy'

export function Home() {
  useDocumentTitle(site.defaultTitle)

  return (
    <>
      <Hero />
      <ScreensGallery />
      <FeatureGrid />
      <HowItWorks />
      <OpenSource />
      <Downloads />
      <CTABand />
    </>
  )
}
