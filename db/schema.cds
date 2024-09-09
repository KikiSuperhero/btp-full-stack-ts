namespace music;

using {
    cuid,
    managed
} from '@sap/cds/common';

entity Pieces : managed {
    key ID       : String;
        name     : String(200);
        composer : Association to Composers;
}

entity Composers : managed {
    key ID        : String;
        firstname : String(100);
        lastname  : String(100);
        pieces  : Association to many Pieces
                        on pieces.composer = $self;
}
