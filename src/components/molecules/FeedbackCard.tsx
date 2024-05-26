import React from 'react';
import { Avatar, Box, Rating, Typography } from '@mui/material';
import useToggle from '../../hooks/useToggle';
// import { withHostname } from '../../services/api/service';
import { IFeedbackItem } from '../../services/club/interface';

export const FeedbackCard: React.FC<IFeedbackItem> = ({
  rating,
  comment,
  createdAt,
  // userFrom,
}) => {
  const isLongReview = comment?.length > 200;
  const feedbackText = isLongReview ? `${comment.slice(0, 200)}...` : comment;

  const createdDate = new Date(createdAt).toLocaleDateString();

  const [isExpanded, setIsExpanded] = useToggle();

  return (
    <Box p={1.5} border="1px solid #eee">
      <Box mb={1.5} display="flex" justifyContent="space-between">
        <Box display="flex" gap={1}>
          <Avatar
            // src={withHostname(userFrom?.avatar?.formats?.small || '')}
            sx={{
              width: 45,
              height: 45,
              backgroundColor: 'primary.main',
            }}
          />
          <Box>
            <Typography fontWeight={500}>User Name</Typography>
            <Rating
              name="user-rating"
              defaultValue={rating}
              precision={0.1}
              readOnly
              sx={{ color: 'primary.main', fontSize: 22 }}
            />
          </Box>
        </Box>
        <Typography fontSize={13} color="#777">
          {createdDate}
        </Typography>
      </Box>

      <Typography>
        {isExpanded ? comment : feedbackText}
        {isLongReview && (
          <Typography
            component="span"
            onClick={() => setIsExpanded()}
            fontSize={14}
            ml={1}
            sx={{
              cursor: 'pointer',
              textDecoration: 'underline',
              '&:hover': { color: 'primary.main' },
              transition: 'color .2s ease',
            }}
          >
            {isExpanded ? 'Свернуть' : 'Читать полностью'}
          </Typography>
        )}
      </Typography>
    </Box>
  );
};
