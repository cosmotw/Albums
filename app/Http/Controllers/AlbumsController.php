<?php

namespace App\Http\Controllers;

use App\Albums;
use Illuminate\Http\Request;

class AlbumsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $photos = Albums::all();
        return $photos;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Albums $albums)
    {
        $albums->title = $request->input('title');
        $albums->photo_url = $request->input('photo_url');
        $albums->description = $request->input('description');
        $albums->category = $request->input('category', 1);
        $code = $albums->save() ? 200 : 500;

        return response()->json(['code' =>  $code]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Albums  $albums
     * @return \Illuminate\Http\Response
     */
    public function show(Albums $albums)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Albums  $albums
     * @return \Illuminate\Http\Response
     */
    public function edit(Albums $albums)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Albums  $albums
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Albums $albums)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Albums  $albums
     * @return \Illuminate\Http\Response
     */
    public function destroy(Albums $albums)
    {
        //
    }
}
