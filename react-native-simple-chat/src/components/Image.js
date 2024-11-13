import React, { useEffect } from 'react';
import { Platform, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';

const Container = styled.View`
    align-self: center;
    margin-bottom: 30px;
`;

const ButtonContainer = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.imageButtonBackground};
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;

const ButtonIcon = styled(MaterialIcons).attrs({
    name: 'photo-camera',
    size: 22,
})`
    color: ${({ theme }) => theme.imageButtonIcon};
`;

const PhotoButton = ({ onPress }) => {
    return (
        <ButtonContainer onPress={onPress}>
            <ButtonIcon />
        </ButtonContainer>
    );
};

const StyledImage = styled.Image`
    background-color: ${({ theme }) => theme.imageBackground};
    width: 100px;
    height: 100px;
    border-radius: ${({ rounded }) => (rounded ? 50 : 0)}px;
`;

const Image = ({ url, imageStyle, rounded, showButton, onChangeImage }) => {
    useEffect(() => {
        (async () => {
            try {
                // 권한 요청 (iOS에서만 필요)
                if (Platform.OS === 'ios') {
                    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                    if (status !== 'granted') {
                        Alert.alert(
                            'Photo Permission',
                            'Please turn on camera roll permissions'
                        );
                    }
                }
            } catch (error) {
                Alert.alert('Photo Permission Error', error.message);
            }
        })();
    }, []);

    const _handleEditButton = async () => {
        try {
            const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Image, // 이미지만 선택할 수 있음
                allowsEditing: true, // 간단한 편집(자르기) 옵션이 제공된다.
                aspect: [1, 1], // 사용자가 이미지를 편집할 때 1:1 비율로 자를 수 있도록 한다.
                quality: 1, // 1로 설정하면 이미지가 최고 품질로 유지된다.
            });

            // result.canceled: 사용자가 이미지를 선택하지 않고 취소한 경우
            // 취소하면 true, 취소 안 하면 false
            if (!result.canceled) {
                onChangeImage(result.assets[0].uri);
            }
        } catch (error) {
            Alert.alert('Photo Error', error.message);
        }
    };

    return (
        <Container>
            <StyledImage source={{ uri: url }} style={imageStyle} rounded={rounded} />
            {showButton && <PhotoButton onPress={_handleEditButton} />}
        </Container>
    );
};

Image.defaultProps = {
    rounded: false,
    showButton: false,
    onChangeImage: () => {},
};

Image.propTypes = {
    url: PropTypes.string, // uri에 들어오는 값은 string이어야 한다.
    imageStyle: PropTypes.object,
    rounded: PropTypes.bool,
    showButton: PropTypes.bool,
    onChangeImage: PropTypes.func,
};

export default Image;
