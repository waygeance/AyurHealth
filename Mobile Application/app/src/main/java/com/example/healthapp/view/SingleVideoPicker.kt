package com.example.healthapp.view

import android.graphics.Bitmap
import android.media.MediaMetadataRetriever
import android.net.Uri
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.PickVisualMediaRequest
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.text.BasicText
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import coil.compose.AsyncImage
import com.example.healthapp.util.StorageUtil
import com.google.firebase.BuildConfig

// Your custom colors


@Composable
fun SingleVideoPicker() {
    var uri by remember {
        mutableStateOf<Uri?>(null)
    }

    val singlePhotoPicker = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.PickVisualMedia(),
        onResult = {
            uri = it
        }
    )

    val context = LocalContext.current

    Column(
        modifier = Modifier
            .padding(16.dp)
            .fillMaxSize()
    ) {
        // Pick Video and Upload Buttons
        Row(
            modifier = Modifier
                .fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            Button(
                onClick = {
                    singlePhotoPicker.launch(
                        PickVisualMediaRequest(ActivityResultContracts.PickVisualMedia.VideoOnly)
                    )
                },
                modifier = Modifier.weight(1f),
                contentPadding = PaddingValues(vertical = 12.dp),
                colors = ButtonDefaults.buttonColors(containerColor = Green)
            ) {
                Text("Pick Video", color = Color.White)
            }

            Button(
                onClick = {
                    uri?.let {
                        StorageUtil.uploadToStorage(uri = it, context = context, type = "video")
                    }
                },
                modifier = Modifier.weight(1f),
                contentPadding = PaddingValues(vertical = 12.dp),
                colors = ButtonDefaults.buttonColors(containerColor = Green)
            ) {
                Text("Upload", color =Color. White)
            }
        }

        // Display Video Thumbnail if available
        val mediaMetadataRetriever = MediaMetadataRetriever()
        var thumbnail: Bitmap? = null
        try {
            uri?.let {
                mediaMetadataRetriever.setDataSource(context, it)
                thumbnail = mediaMetadataRetriever.getFrameAtTime(100) // time in Micros
            }
        } catch (e: Exception) {
            if (BuildConfig.DEBUG) {
                e.printStackTrace()
            }
        } finally {
            mediaMetadataRetriever.release()
        }

        thumbnail?.let {
            AsyncImage(model = it, contentDescription = "Video Thumbnail", modifier = Modifier.size(248.dp).padding(top = 16.dp))
        }

        // Display Video Player (if URI is available)
        uri?.let {
            VideoPlayerScreen(uri = it, modifier = Modifier.padding(top = 16.dp))
        }
    }
}

@Composable
fun VideoPlayerScreen(uri: Uri, modifier: Modifier = Modifier) {
    // Implement your video player here
    BasicText("Video Player for URI: $uri", modifier = modifier)
}
