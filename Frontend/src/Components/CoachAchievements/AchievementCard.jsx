import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AchieveImageBefore from "../../Assets/images/service-1.jpg"
import AchieveImageAfter from "../../Assets/images/service-2.jpg"

const AchievementCard = ({achievement}) => {
    return (
        <Card  sx={ {maxWidth: 300, backgroundColor: "var(--main-background-color)", border:"1px solid var(--red-main-color)" }}>
            <div className={`d-flex justify-content-between`}>
                <CardMedia
                    sx={{ height: 140, width: 145  }}
                    image={AchieveImageBefore}
                    title="green iguana"
                />
                <CardMedia
                    sx={{ height: 140, width: 145 }}
                    image={AchieveImageAfter}
                    title="green iguana"
                />
            </div>
            <CardContent>
                <Typography sx={{color: "var(--red-main-color)"}} gutterBottom variant="h5" component="div">
                    {achievement.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "var(--white-color)"}}>
                    {achievement.description}
                </Typography>
                <Typography variant="caption" sx={{ color: "gray" }}>
                  {new Date(achievement.date).toLocaleDateString()}
                </Typography>
                
            </CardContent>
            <CardActions>
                <Button sx={{color: "var(--white-color)",backgroundColor: "var(--red-main-color)", padding:1, textTransform: "none" }} size="small">View Certificate</Button>
            </CardActions>
        </Card>
        );
    }

export default AchievementCard