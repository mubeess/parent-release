import Icon from '@safsims/components/Icon/Icon';
import { Dots, FoldImage } from '@safsims/components/Images';
import Text from '@safsims/components/Text/Text';
import { Feed } from '@safsims/generated';
import { lightTheme } from '@safsims/utils/Theme';
import moment from 'moment';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import useLikeUsingPut from '../hooks/useLikeUsingPut';

export default function FeedMenu({ feed }: { feed: Feed }) {
  const day = moment(feed?.published).format('DD-MM');
  const time = moment(feed?.published).format('HH:mm');
  const { likeFeed, likingFeed, feeds } = useLikeUsingPut();

  return (
    <View style={styles.container}>
      {feed && (
        <>
          <View style={styles.aside}>
            <Image source={require('../../../../../assets/avatar.png')} style={styles.image} />
            <View style={styles.decoration} />
            <FoldImage />
            <View style={styles.imagesComment}>
              <Image
                source={require('../../../../../assets/avatar.png')}
                style={styles.commentImage}
              />
              <Image
                source={require('../../../../../assets/avatar.png')}
                style={[
                  styles.commentImage,
                  {
                    transform: [{ translateX: 8 }],
                  },
                ]}
              />
              <Image
                source={require('../../../../../assets/avatar.png')}
                style={[
                  styles.commentImage,
                  {
                    transform: [{ translateX: 16 }],
                  },
                ]}
              />
            </View>
          </View>

          <View style={styles.main}>
            <View style={styles.biodata}>
              <View style={styles.name}>
                <Text h3>{feed.actor?.name}</Text>
                <Text style={styles.label}>{'[school admin]'}</Text>
              </View>

              <View style={styles.options}>
                <Text style={styles.label}>{`${day}/${time}`}</Text>
                <Dots />
              </View>
            </View>

            <View style={styles.message}>
              <Text style={styles.text}>{feed.object?.content || ''}</Text>
            </View>

            <View style={styles.comments}>
              <View style={styles.like}>
                <TouchableOpacity
                  onPress={() => {
                    likeFeed({ feedId: feed.id || '', request: { reaction: 'like' } });
                    console.log(feed);
                  }}
                >
                  <Icon name="like-1" size={20} color="#000" />
                </TouchableOpacity>
                {/* <Icon name="message-2" size={20} color="#000" /> */}
              </View>

              <View style={styles.replyStat}>
                <View style={styles.dot} />
                <Text style={styles.label}>{feed.reactions?.length} people liked this feed</Text>
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
    marginBottom: 5,
  },
  aside: {
    width: 40,
    height: '100%',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: 36,
    height: 36,
    borderRadius: 36,
  },
  decoration: {
    width: 2,
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  imagesComment: {
    flexDirection: 'row',
    width: '100%',
    height: 16,
    position: 'relative',
  },
  commentImage: {
    height: 16,
    width: 16,
    borderRadius: 16,
    position: 'absolute',
    borderColor: '#fff',
    borderWidth: 1,
  },
  biodata: {
    flexDirection: 'row',
    height: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: lightTheme.colors.PrimaryGrey,
    marginHorizontal: 5,
  },
  message: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  text: {
    textAlign: 'justify',
    lineHeight: 20,
  },
  comments: {
    height: 58,
  },
  like: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  replyStat: {
    width: '100%',
    height: 20,
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 5,
    backgroundColor: lightTheme.colors.PrimaryBorderColor,
    marginHorizontal: 10,
  },
});
