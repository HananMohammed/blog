<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\CategoryRequest;
use Illuminate\Http\Request;
use App\Models\Api\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the Category.
     *
     * @return
     */
    public function index()
    {
         $categories = Category::all();

         return $categories;
    }
    /**
     * Store a newly created Category in storage.
     *
     * @param  CategoryRequest  $request
     * @param Category $model
     * @return Response
     */
    public function store(CategoryRequest $request, Category $model)
    {
        $category = $model->create($request->all());

        return response()->json(["data"=>$category, "success"=>"Category Stored Successfully "]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified Category from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        $category = Category::find($id);
        $category->delete();
    }
}
