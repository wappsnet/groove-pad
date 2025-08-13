import { FC, useEffect } from 'react';

import { FormattedMessage } from 'react-intl';

import { getAlbums, getAlbumsIsLoading, getAlbumsThunk } from 'store/slices/albums';
import { AlbumDto } from 'store/slices/albums/types';

import { APP_MESSAGES } from 'assets/lang/messages';

import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';

import MKFlat from 'modules/MKFlat';
import MKListItem from 'modules/MKListItem';
import MKScreen from 'modules/MKScreen';

import AppHeader from 'containers/AppHeader';

import AlbumItem from './item';

const AlbumsScreen: FC = () => {
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
        <AppHeader title={<FormattedMessage {...APP_MESSAGES.albums} />} back />
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
