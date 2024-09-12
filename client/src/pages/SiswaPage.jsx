import GridLayout from '../components/layout/GridLayout'
import CardSiswa from '../components/fragment/CardSiswa';
import { useSelector } from 'react-redux';

const SiswaPage = () => { 
  const { dataSiswa } = useSelector((state) => state.siswaSlice);

  return (
    <GridLayout title={'Profile'}>
      {dataSiswa && dataSiswa?.map((el,i) => <CardSiswa key={i} data={el}/>)}
    </GridLayout>
  )
}

export default SiswaPage