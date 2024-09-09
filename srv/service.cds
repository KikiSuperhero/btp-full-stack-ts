using {music as my} from '../db/schema';

//@path : 'service/lectureSchedule'
service MusicService {
    entity Pieces as projection on my.Pieces;
    entity Composers as projection on my.Composers;
}