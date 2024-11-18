import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest, updatePostThumbnail } from "../../actions/postActions";
import Post from "../post/Post";
import UploadMedia from "../UploadMedia/UploadMedia";

const InfoCard = () => {
  const dispatch = useDispatch();
  const { loading, posts, error } = useSelector((state) => state.post);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUploadVisible, setIsUploadVisible] = useState(false);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    );
  };
  const handleImageClick = (mediaIndex) => {
    setSelectedMediaIndex(mediaIndex);
    setIsUploadVisible(true);
  };


  const handleUploadSuccess = (uploadedUrl) => {
    if (selectedMediaIndex !== null && posts[currentIndex]?.media[selectedMediaIndex]) {
      dispatch(
        updatePostThumbnail({
          postId: posts[currentIndex].id, 
          mediaIndex: selectedMediaIndex,
          thumbnailUrl: uploadedUrl,
        })
      );
      setIsUploadVisible(false);
    } else {
      console.error("Selected media index is out of bounds");
    }
  };
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {posts.length > 0 && (
        <>
          <Post
            user={{
              name: posts[0].name,
              avatar: `https://urdulibrary.net/uploads${posts[0].thumbnail}`,
            }}
          />
          <div className="post pb-0">
            <div className="header">
              <img
                src={`https://urdulibrary.net/uploads/${posts[currentIndex].thumbnail}`}
                alt="CISD Logo"
                className="logo"
              />
              <div>
                <h3>{posts[currentIndex].name}</h3>
                <p>{posts[currentIndex].postTitle}</p>
              </div>
            </div>

            <div className="content">
              <p>
                {posts[currentIndex].media[0]?.mediaText ||
                  "No description available."}
              </p>
              <p>Contact us: 0317 1172528, 03171172529</p>
              <p>Address: Twin Plaza Block P, Lahore Motorway City</p>
              <h4>
                {new Date(posts[currentIndex].postDate).toLocaleDateString()}
              </h4>
            </div>

            {/* Media Slider */}
            <div className="media-slider">
              {posts[currentIndex].media &&
                posts[currentIndex].media.length > 0 && (
                  <div className="media-container">
                    {posts[currentIndex].media.map((mediaItem, mediaIndex) => {
                      if (mediaItem.mediaType === 3) {
                        return (
                          <div key={mediaIndex} className="media-item">
                            <p>{mediaItem.mediaText}</p>
                          </div>
                        );
                      } else if (mediaItem.mediaType === 2) {
                        return (
                          <div key={mediaIndex} className="media-item">
                            {mediaItem.videoUrl && (
                              <video controls>
                                <source
                                  src={`https://urdulibrary.net/uploads/${mediaItem.videoUrl}`}
                                  type="video/mp4"
                                />
                                Your browser does not support the video tag.
                              </video>
                            )}
                          </div>
                        );
                      } else if (
                        mediaItem.mediaType === 1 &&
                        mediaItem.thumbnailUrl
                      ) {
                        console.log("Media Item:", mediaItem);
                        return (
                          <div key={mediaIndex} className="media-item">
                            <img
                              src={`https://urdulibrary.net/uploads/${mediaItem.thumbnailUrl}`}
                              
                              alt="Post Media"
                              className="responsive-image"
                              onClick={() => handleImageClick(mediaIndex)}
                            />
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                )}

              <button className="arrow-button left-arrow" onClick={handlePrev}>
                &lt;
              </button>
              <button className="arrow-button right-arrow" onClick={handleNext}>
                &gt;
              </button>
              {isUploadVisible && (
                <UploadMedia onUploadSuccess={handleUploadSuccess} />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default InfoCard;
