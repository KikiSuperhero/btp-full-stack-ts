namespace music;

using {
    managed

} from '@sap/cds/common';

entity Pieces : managed {
    key ID       : String;
        name     : String(200) @mandatory;
        publishdate: Date;
        composer : Association to Composers;
}

entity Composers : managed {
    key ID        : String;
        firstname : String(100) @mandatory;
        lastname  : String(100);
        dateofbirth: Date;
        dateOfdeath : Date;
        alive       : Boolean;
        pieces  : Association to many Pieces
                        on pieces.composer = $self;
}
