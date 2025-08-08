import { FC, useEffect } from 'react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { getAlbums, getAlbumsIsLoading, getAlbumsThunk } from 'store/slices/albums';
import { AlbumDto } from 'store/slices/albums/types';
import MKScreen from 'modules/MKScreen';
import MKFlat from 'modules/MKFlat';
import MKListItem from 'modules/MKListItem';
import AlbumItem from './item';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AppHeader from 'containers/AppHeader';
import Intl from 'services/intl';

const AlbumsScreen: FC<NativeStackScreenProps<{}>> = () => {
  const dispatch = useAppDispatch();
  const albums = useAppSelector(({ albums }) => getAlbums(albums));
  const loading = useAppSelector(({ albums }) => getAlbumsIsLoading(albums));

  useEffect(() => {
    dispatch(getAlbumsThunk());
  }, [dispatch]);

  const openAlbum = (id: number) => {
    console.log(id);
  };

  return (
    <MKScreen>
      <MKScreen.Header>
        <AppHeader title={Intl.t('screens.albums.header')} back />
      </MKScreen.Header>
      <MKScreen.Body>
        <MKFlat<AlbumDto>
          loading={loading.isPending}
          sections={[
            {
              data: albums ?? [],
            },
          ]}
          renderItem={({ item }) => (
            <MKListItem
              onClick={() => {
                openAlbum(item.id);
              }}
            >
              <AlbumItem {...item} />
            </MKListItem>
          )}
        />
      </MKScreen.Body>
      <MKScreen.Footer />
    </MKScreen>
  );
};

export default AlbumsScreen;
