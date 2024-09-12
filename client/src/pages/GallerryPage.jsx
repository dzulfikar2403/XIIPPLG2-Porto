import GridLayout from '../components/layout/GridLayout'
import CardPhotos from '../components/fragment/CardPhotos';
import { useSelector } from 'react-redux';

const GallerryPage = () => {
  const {gallery} = useSelector(state => state.gallerySlice)

  return (
    <GridLayout title={"Gallery"}>
      {gallery && gallery?.map((el,i) => <CardPhotos key={i} data={el}/>)}
    </GridLayout>
  )
}

export default GallerryPage