// Draw stuff
// Time-stamp: <2019-01-21 20:08:33 Chuck Siska>
// ------------------------------------------------------------

// FUN. Draw filled rect.

function draw_cell(ctx, x, y)
{
    var stroke = 'blue';
    var fill = 'green';
    ctx.save();
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
        
    width = cavas.width - 210;
    ctx.rect(x,y,8.5, 8.5);
    ctx.fill();
    ctx.restore();
}

function drawArray (ctx, arr)
{
    var localx = 70;
    var arrayLength = arr.length;
    for(var i=0; i < arrayLength; i++)
    {
        if(arr[i] === 1)
    {
        draw_cell(ctx, localX, globalY );
    }
    }
}

function draw_rect( ctx, stroke, fill ) 
{
    for(let i = 0; i < 20; i++)
    {
        for(let j = 0; j <100; j++)
        {
        stroke = stroke || 'lightgrey';
        fill = fill || 'green';
        ctx.save( );
        ctx.strokeStyle = stroke;
        ctx.fillStyle = fill;
        ctx.lineWidth = 5;
        ctx.rect(i, j, 8,8);
        ctx.stroke();
        ctx.fill();
        ctx.restore( );
        }
    }
    // for(let i = 0; i < 100; i++)
    // {
    // stroke = stroke || 'lightgrey';
    // fill = fill || 'white';
    // ctx.save( );
    // ctx.strokeStyle = stroke;
    // ctx.fillStyle = fill;
    // ctx.lineWidth = 5;
    // ctx.rect(1, i, 8,8);
    // ctx.stroke();
    // ctx.fill();
    // ctx.restore( );
    // }
}

// =====================================================  draw_grid ====
function draw_grid( rctx, rminor, rmajor, rstroke, rfill  ) 
{
    rctx.save( );
    rctx.strokeStyle = rstroke;
    rctx.fillStyle = rfill;
    let width = rctx.canvas.width;
    let height = rctx.canvas.height;
    for ( var ix = 0; ix < width; ix += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( ix, 0 );
        rctx.lineTo( ix, height );
        rctx.lineWidth = ( ix % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( ix % rmajor == 0 ) { rctx.fillText( ix, ix, 10 ); }
    }
    for ( var iy = 0; iy < height; iy += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 0, iy );
        rctx.lineTo( width, iy );
        rctx.lineWidth = ( iy % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( iy % rmajor == 0 ) {rctx.fillText( iy, 0, iy + 10 );}
    }
    rctx.restore( );
}
