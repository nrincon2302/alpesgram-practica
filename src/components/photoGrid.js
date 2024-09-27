import { React, useEffect, useState } from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';
import './styles.css';

function PhotoGrid() {

    //const [images, setImages] = useState([])

    // const photos = useEffect(()=>{
    //     for (let i = 0; i < 12; i++) {
    //         fetch("https://via.placeholder.com/350")
    //         .then(data => data.blob())
    //         .then(blob => {setImages(URL.createObjectURL(blob))})
    //     }
    // })

    const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imageUrls = [];
      for (let i = 0; i < 12; i++) {
        imageUrls.push(`https://picsum.photos/350?random=${i}`);
      }
      setImages(imageUrls);
    };
    fetchImages();
  }, []);

  const getColumns = () => {
    const screenWidth = window.screen.width;
    if (screenWidth > 800) return 'repeat(4, 1fr)';
    if (screenWidth > 500) return 'repeat(3, 1fr)';
    return 'repeat(2, 1fr)';
  };

  return (
    <Container className="mx-auto">
      <Row style={{ display: 'grid', gridTemplateColumns: getColumns() }}>
        {images.map((imageUrl, index) => (
          <Col className="mb-3" key={index}>
            <Image src={imageUrl} fluid />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PhotoGrid;