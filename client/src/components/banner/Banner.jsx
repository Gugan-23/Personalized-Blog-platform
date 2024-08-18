import { styled, Box, Typography } from '@mui/material';

const backgroundImages = [
    'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg',
    'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg',
    'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
    'https://images.pexels.com/photos/764880/pexels-photo-764880.jpeg',
    'https://images.pexels.com/photos/1005410/pexels-photo-1005410.jpeg'
];

const getRandomBackgroundImage = () => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    return backgroundImages[randomIndex];
};

const Image = styled(Box)`
    width: 100%;
    background: url(${getRandomBackgroundImage()}) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1;
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    return (
        <Image>
            <Heading>BLOG</Heading>
            <SubHeading>Code for Interview</SubHeading>
        </Image>
    );
}

export default Banner;
